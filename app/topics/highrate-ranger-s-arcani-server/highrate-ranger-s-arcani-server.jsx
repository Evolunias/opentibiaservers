import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ranger-s-arcani-server');
}

export default function HighrateRangerSArcaniServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-ranger-s-arcani-server" />;
}
