import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-12-evo-server');
}

export default function Carlinot12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-12-evo-server" />;
}
