import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-11-evo-servers');
}

export default function Kasteria11EvoServersKeywordPage() {
  return <StaticKeywordPage slug="kasteria-11-evo-servers" />;
}
