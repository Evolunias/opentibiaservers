import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-1-evo-servers');
}

export default function Canob71EvoServersKeywordPage() {
  return <StaticKeywordPage slug="canob-7-1-evo-servers" />;
}
