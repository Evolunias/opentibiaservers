import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-15-evo-server');
}

export default function CalmeraOt15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-15-evo-server" />;
}
