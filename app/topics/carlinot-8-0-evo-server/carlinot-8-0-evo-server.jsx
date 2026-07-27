import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-0-evo-server');
}

export default function Carlinot80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-0-evo-server" />;
}
