import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-archlight-forum');
}

export default function LowrateArchlightForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-archlight-forum" />;
}
