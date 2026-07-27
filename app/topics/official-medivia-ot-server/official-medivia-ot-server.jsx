import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-medivia-ot-server');
}

export default function OfficialMediviaOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-medivia-ot-server" />;
}
