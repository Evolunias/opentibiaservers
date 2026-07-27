import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-canob-server');
}

export default function EvoCanobServerKeywordPage() {
  return <StaticKeywordPage slug="evo-canob-server" />;
}
