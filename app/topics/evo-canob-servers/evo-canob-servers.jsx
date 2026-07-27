import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-canob-servers');
}

export default function EvoCanobServersKeywordPage() {
  return <StaticKeywordPage slug="evo-canob-servers" />;
}
