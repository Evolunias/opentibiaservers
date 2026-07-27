import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-10-0-evo-servers');
}

export default function Tibiantis100EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-10-0-evo-servers" />;
}
