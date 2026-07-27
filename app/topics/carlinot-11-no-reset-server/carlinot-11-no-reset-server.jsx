import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-11-no-reset-server');
}

export default function Carlinot11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-11-no-reset-server" />;
}
