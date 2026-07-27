import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-7-4-high-exp-server');
}

export default function CalmeraOt74HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-7-4-high-exp-server" />;
}
