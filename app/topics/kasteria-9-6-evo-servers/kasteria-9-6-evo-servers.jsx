import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-9-6-evo-servers');
}

export default function Kasteria96EvoServersKeywordPage() {
  return <StaticKeywordPage slug="kasteria-9-6-evo-servers" />;
}
