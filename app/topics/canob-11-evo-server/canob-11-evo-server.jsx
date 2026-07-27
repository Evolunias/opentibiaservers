import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-11-evo-server');
}

export default function Canob11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="canob-11-evo-server" />;
}
