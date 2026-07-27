import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-evo-server-canada');
}

export default function ThaisotEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-evo-server-canada" />;
}
