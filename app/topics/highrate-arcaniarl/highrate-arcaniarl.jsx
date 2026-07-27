import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-arcaniarl');
}

export default function HighrateArcaniarlKeywordPage() {
  return <StaticKeywordPage slug="highrate-arcaniarl" />;
}
