import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-10-0-no-reset-server');
}

export default function Carlinot100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-10-0-no-reset-server" />;
}
