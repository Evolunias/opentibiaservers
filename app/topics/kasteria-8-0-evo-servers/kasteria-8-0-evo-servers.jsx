import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-0-evo-servers');
}

export default function Kasteria80EvoServersKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-0-evo-servers" />;
}
