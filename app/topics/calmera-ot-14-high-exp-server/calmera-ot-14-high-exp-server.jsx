import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-14-high-exp-server');
}

export default function CalmeraOt14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-14-high-exp-server" />;
}
