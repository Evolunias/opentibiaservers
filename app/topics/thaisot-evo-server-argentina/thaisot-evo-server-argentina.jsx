import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-evo-server-argentina');
}

export default function ThaisotEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-evo-server-argentina" />;
}
