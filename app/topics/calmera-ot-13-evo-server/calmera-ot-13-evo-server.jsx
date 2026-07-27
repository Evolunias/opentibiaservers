import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-13-evo-server');
}

export default function CalmeraOt13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-13-evo-server" />;
}
