import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-high-exp');
}

export default function CalmeraOtHighExpKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-high-exp" />;
}
