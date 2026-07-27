import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-7-72-evo-server');
}

export default function Carlinot772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-7-72-evo-server" />;
}
