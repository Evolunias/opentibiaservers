import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-10-0-evo-server');
}

export default function Carlinot100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-10-0-evo-server" />;
}
