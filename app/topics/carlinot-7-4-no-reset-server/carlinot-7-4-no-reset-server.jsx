import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-7-4-no-reset-server');
}

export default function Carlinot74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-7-4-no-reset-server" />;
}
