import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-6-evo-server');
}

export default function Canob86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="canob-8-6-evo-server" />;
}
