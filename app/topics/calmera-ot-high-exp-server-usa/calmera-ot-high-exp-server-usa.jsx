import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-high-exp-server-usa');
}

export default function CalmeraOtHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-high-exp-server-usa" />;
}
