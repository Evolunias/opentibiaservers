import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-medivia-ot-server');
}

export default function TopMediviaOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-medivia-ot-server" />;
}
