import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nto-star-forum');
}

export default function LowrateNtoStarForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nto-star-forum" />;
}
