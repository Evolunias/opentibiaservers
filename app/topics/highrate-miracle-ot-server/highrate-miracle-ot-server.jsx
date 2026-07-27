import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-miracle-ot-server');
}

export default function HighrateMiracleOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-miracle-ot-server" />;
}
