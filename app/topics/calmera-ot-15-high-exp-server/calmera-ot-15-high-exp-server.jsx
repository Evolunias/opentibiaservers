import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-15-high-exp-server');
}

export default function CalmeraOt15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-15-high-exp-server" />;
}
