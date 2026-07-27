import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-evo-server-mexico');
}

export default function ThaisotEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="thaisot-evo-server-mexico" />;
}
