import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-4-no-reset-server');
}

export default function Carlinot84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-4-no-reset-server" />;
}
