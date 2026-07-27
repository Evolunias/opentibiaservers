import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-1-evo-servers');
}

export default function Canob81EvoServersKeywordPage() {
  return <StaticKeywordPage slug="canob-8-1-evo-servers" />;
}
