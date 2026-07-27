import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-eternal-odyssey-forum');
}

export default function LowrateEternalOdysseyForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-eternal-odyssey-forum" />;
}
