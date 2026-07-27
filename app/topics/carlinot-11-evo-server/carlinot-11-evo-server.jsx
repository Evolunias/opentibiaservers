import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-11-evo-server');
}

export default function Carlinot11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-11-evo-server" />;
}
