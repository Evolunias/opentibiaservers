import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-8-6-evo-server');
}

export default function CalmeraOt86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-8-6-evo-server" />;
}
