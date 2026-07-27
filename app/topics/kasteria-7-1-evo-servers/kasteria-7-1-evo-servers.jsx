import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-1-evo-servers');
}

export default function Kasteria71EvoServersKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-1-evo-servers" />;
}
