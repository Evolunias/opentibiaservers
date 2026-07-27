import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-72-evo-server');
}

export default function Canob772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="canob-7-72-evo-server" />;
}
