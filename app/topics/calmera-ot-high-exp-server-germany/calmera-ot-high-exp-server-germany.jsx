import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-high-exp-server-germany');
}

export default function CalmeraOtHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-high-exp-server-germany" />;
}
