import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-9-6-evo-servers');
}

export default function Canob96EvoServersKeywordPage() {
  return <StaticKeywordPage slug="canob-9-6-evo-servers" />;
}
