import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-13-no-reset-server');
}

export default function Carlinot13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-13-no-reset-server" />;
}
