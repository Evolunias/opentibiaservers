import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ranger-s-arcani-client');
}

export default function HighrateRangerSArcaniClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-ranger-s-arcani-client" />;
}
