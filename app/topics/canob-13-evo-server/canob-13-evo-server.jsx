import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-13-evo-server');
}

export default function Canob13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="canob-13-evo-server" />;
}
