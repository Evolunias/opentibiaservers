import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-54-evo-server');
}

export default function Canob854EvoServerKeywordPage() {
  return <StaticKeywordPage slug="canob-8-54-evo-server" />;
}
