import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-12-evo-server');
}

export default function Marolaot12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-12-evo-server" />;
}
