import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-medivia-ot-server');
}

export default function NoResetMediviaOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-medivia-ot-server" />;
}
