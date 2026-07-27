import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-12-evo-servers');
}

export default function Kasteria12EvoServersKeywordPage() {
  return <StaticKeywordPage slug="kasteria-12-evo-servers" />;
}
