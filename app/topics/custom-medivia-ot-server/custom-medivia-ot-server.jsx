import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-medivia-ot-server');
}

export default function CustomMediviaOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-medivia-ot-server" />;
}
