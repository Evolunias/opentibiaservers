import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-medivia-ot-server');
}

export default function HighrateMediviaOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-medivia-ot-server" />;
}
