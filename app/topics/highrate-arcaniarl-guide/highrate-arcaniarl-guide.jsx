import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-arcaniarl-guide');
}

export default function HighrateArcaniarlGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-arcaniarl-guide" />;
}
