import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-6-evo-server');
}

export default function Canob76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="canob-7-6-evo-server" />;
}
