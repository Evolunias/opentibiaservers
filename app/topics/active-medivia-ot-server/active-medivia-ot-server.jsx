import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-medivia-ot-server');
}

export default function ActiveMediviaOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-medivia-ot-server" />;
}
