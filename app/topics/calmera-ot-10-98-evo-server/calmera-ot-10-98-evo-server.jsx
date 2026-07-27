import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-10-98-evo-server');
}

export default function CalmeraOt1098EvoServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-10-98-evo-server" />;
}
