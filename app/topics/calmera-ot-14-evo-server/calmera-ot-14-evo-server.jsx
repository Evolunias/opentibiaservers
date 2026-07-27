import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-14-evo-server');
}

export default function CalmeraOt14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-14-evo-server" />;
}
