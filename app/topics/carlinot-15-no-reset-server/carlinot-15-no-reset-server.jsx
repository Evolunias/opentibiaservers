import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-15-no-reset-server');
}

export default function Carlinot15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-15-no-reset-server" />;
}
