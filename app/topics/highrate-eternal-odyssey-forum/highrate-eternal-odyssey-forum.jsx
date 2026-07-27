import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-eternal-odyssey-forum');
}

export default function HighrateEternalOdysseyForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-eternal-odyssey-forum" />;
}
