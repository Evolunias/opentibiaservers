import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-9-6-evo-servers');
}

export default function Tibiantis96EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-9-6-evo-servers" />;
}
