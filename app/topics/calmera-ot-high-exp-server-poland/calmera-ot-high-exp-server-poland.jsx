import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-high-exp-server-poland');
}

export default function CalmeraOtHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-high-exp-server-poland" />;
}
