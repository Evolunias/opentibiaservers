import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-1-evo-servers');
}

export default function Tibiantis71EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-1-evo-servers" />;
}
