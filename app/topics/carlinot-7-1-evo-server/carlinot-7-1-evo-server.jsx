import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-7-1-evo-server');
}

export default function Carlinot71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-7-1-evo-server" />;
}
