import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-high-exp-server-argentina');
}

export default function CalmeraOtHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-high-exp-server-argentina" />;
}
