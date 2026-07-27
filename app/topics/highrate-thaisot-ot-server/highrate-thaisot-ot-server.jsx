import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-thaisot-ot-server');
}

export default function HighrateThaisotOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-thaisot-ot-server" />;
}
