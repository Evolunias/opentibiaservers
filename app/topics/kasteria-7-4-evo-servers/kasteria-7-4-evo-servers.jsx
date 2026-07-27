import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-4-evo-servers');
}

export default function Kasteria74EvoServersKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-4-evo-servers" />;
}
