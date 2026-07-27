import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-originaltibia-forum');
}

export default function ActiveOriginaltibiaForumKeywordPage() {
  return <StaticKeywordPage slug="active-originaltibia-forum" />;
}
