import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-7-4-evo-server');
}

export default function Carlinot74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-7-4-evo-server" />;
}
