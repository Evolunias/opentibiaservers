import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-6-evo-servers');
}

export default function Canob86EvoServersKeywordPage() {
  return <StaticKeywordPage slug="canob-8-6-evo-servers" />;
}
