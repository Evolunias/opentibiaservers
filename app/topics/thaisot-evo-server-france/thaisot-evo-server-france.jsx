import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-evo-server-france');
}

export default function ThaisotEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="thaisot-evo-server-france" />;
}
