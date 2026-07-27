import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-7-1-evo-server');
}

export default function CalmeraOt71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-7-1-evo-server" />;
}
