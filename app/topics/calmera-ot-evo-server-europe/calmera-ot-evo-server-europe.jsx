import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-evo-server-europe');
}

export default function CalmeraOtEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-evo-server-europe" />;
}
