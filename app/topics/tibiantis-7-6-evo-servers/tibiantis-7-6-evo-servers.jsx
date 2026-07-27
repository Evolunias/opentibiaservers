import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-6-evo-servers');
}

export default function Tibiantis76EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-6-evo-servers" />;
}
