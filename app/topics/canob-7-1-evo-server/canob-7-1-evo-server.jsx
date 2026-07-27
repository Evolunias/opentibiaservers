import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-1-evo-server');
}

export default function Canob71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="canob-7-1-evo-server" />;
}
