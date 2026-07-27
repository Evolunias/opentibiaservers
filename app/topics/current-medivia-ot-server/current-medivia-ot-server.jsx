import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-medivia-ot-server');
}

export default function CurrentMediviaOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-medivia-ot-server" />;
}
