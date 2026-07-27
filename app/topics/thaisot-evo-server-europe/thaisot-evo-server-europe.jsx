import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-evo-server-europe');
}

export default function ThaisotEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="thaisot-evo-server-europe" />;
}
