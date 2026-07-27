import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-8-1-evo-servers');
}

export default function Tibiantis81EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-8-1-evo-servers" />;
}
