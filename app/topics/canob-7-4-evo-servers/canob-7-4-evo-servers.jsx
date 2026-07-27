import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-4-evo-servers');
}

export default function Canob74EvoServersKeywordPage() {
  return <StaticKeywordPage slug="canob-7-4-evo-servers" />;
}
