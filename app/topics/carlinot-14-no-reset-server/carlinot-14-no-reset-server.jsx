import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-14-no-reset-server');
}

export default function Carlinot14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-14-no-reset-server" />;
}
