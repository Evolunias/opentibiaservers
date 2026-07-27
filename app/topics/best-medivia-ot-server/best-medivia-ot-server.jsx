import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-medivia-ot-server');
}

export default function BestMediviaOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-medivia-ot-server" />;
}
