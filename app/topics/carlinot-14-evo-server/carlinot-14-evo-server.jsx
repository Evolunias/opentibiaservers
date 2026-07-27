import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-14-evo-server');
}

export default function Carlinot14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-14-evo-server" />;
}
