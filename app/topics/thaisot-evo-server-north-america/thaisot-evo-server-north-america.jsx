import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-evo-server-north-america');
}

export default function ThaisotEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-evo-server-north-america" />;
}
