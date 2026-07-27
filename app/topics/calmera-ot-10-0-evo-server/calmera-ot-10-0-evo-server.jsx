import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-10-0-evo-server');
}

export default function CalmeraOt100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-10-0-evo-server" />;
}
