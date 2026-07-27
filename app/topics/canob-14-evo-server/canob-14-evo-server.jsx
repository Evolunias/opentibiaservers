import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-14-evo-server');
}

export default function Canob14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="canob-14-evo-server" />;
}
