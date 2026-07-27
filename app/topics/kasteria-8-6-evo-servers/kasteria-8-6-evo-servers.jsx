import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-6-evo-servers');
}

export default function Kasteria86EvoServersKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-6-evo-servers" />;
}
