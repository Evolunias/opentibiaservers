import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-6-evo-server');
}

export default function Carlinot86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-6-evo-server" />;
}
