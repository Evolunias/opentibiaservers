import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-evo-server-usa');
}

export default function ThaisotEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-evo-server-usa" />;
}
