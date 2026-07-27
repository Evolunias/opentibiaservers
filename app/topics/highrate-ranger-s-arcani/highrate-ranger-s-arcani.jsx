import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ranger-s-arcani');
}

export default function HighrateRangerSArcaniKeywordPage() {
  return <StaticKeywordPage slug="highrate-ranger-s-arcani" />;
}
