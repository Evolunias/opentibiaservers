import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-9-6-no-reset-server');
}

export default function Carlinot96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-9-6-no-reset-server" />;
}
