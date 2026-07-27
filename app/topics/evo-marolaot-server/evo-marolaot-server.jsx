import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-marolaot-server');
}

export default function EvoMarolaotServerKeywordPage() {
  return <StaticKeywordPage slug="evo-marolaot-server" />;
}
