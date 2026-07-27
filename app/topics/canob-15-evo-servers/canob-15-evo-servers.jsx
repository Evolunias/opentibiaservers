import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-15-evo-servers');
}

export default function Canob15EvoServersKeywordPage() {
  return <StaticKeywordPage slug="canob-15-evo-servers" />;
}
