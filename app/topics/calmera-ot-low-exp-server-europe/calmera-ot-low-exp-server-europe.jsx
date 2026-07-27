import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-low-exp-server-europe');
}

export default function CalmeraOtLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-low-exp-server-europe" />;
}
