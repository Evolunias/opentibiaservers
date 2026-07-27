import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-4-evo-servers');
}

export default function Tibiantis74EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-4-evo-servers" />;
}
