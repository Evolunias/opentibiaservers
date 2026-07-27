import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-4-evo-server');
}

export default function Canob84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="canob-8-4-evo-server" />;
}
