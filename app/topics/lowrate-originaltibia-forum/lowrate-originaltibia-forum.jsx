import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-originaltibia-forum');
}

export default function LowrateOriginaltibiaForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-originaltibia-forum" />;
}
