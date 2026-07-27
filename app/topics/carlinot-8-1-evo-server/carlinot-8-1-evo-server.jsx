import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-1-evo-server');
}

export default function Carlinot81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-1-evo-server" />;
}
