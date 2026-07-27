import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-originaltibia-forum');
}

export default function TopOriginaltibiaForumKeywordPage() {
  return <StaticKeywordPage slug="top-originaltibia-forum" />;
}
