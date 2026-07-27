import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-evo-server-canada');
}

export default function CanobEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="canob-evo-server-canada" />;
}
