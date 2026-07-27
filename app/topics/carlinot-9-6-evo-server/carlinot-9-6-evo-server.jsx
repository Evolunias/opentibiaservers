import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-9-6-evo-server');
}

export default function Carlinot96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-9-6-evo-server" />;
}
