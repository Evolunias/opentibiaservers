import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-1-evo-server');
}

export default function Canob81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="canob-8-1-evo-server" />;
}
