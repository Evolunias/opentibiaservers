import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-marolaot-servers');
}

export default function EvoMarolaotServersKeywordPage() {
  return <StaticKeywordPage slug="evo-marolaot-servers" />;
}
