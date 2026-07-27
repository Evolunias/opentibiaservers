import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-originaltibia-forum');
}

export default function CurrentOriginaltibiaForumKeywordPage() {
  return <StaticKeywordPage slug="current-originaltibia-forum" />;
}
