import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-arcaniarl-ots');
}

export default function HighrateArcaniarlOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-arcaniarl-ots" />;
}
