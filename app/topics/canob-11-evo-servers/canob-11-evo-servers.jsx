import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-11-evo-servers');
}

export default function Canob11EvoServersKeywordPage() {
  return <StaticKeywordPage slug="canob-11-evo-servers" />;
}
