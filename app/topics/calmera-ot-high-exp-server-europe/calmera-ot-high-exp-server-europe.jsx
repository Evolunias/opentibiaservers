import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-high-exp-server-europe');
}

export default function CalmeraOtHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-high-exp-server-europe" />;
}
