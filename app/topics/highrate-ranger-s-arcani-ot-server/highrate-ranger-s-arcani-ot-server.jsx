import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ranger-s-arcani-ot-server');
}

export default function HighrateRangerSArcaniOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-ranger-s-arcani-ot-server" />;
}
