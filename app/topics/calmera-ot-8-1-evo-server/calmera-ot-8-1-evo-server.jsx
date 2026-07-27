import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-8-1-evo-server');
}

export default function CalmeraOt81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-8-1-evo-server" />;
}
