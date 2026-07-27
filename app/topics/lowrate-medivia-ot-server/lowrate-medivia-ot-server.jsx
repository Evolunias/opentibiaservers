import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-medivia-ot-server');
}

export default function LowrateMediviaOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-medivia-ot-server" />;
}
