import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-11-evo-server');
}

export default function CalmeraOt11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-11-evo-server" />;
}
