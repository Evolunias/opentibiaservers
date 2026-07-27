import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-13-evo-servers');
}

export default function Tibiantis13EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-13-evo-servers" />;
}
