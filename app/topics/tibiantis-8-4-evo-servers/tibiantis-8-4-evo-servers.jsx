import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-8-4-evo-servers');
}

export default function Tibiantis84EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-8-4-evo-servers" />;
}
