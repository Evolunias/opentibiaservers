import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-high-exp-server-chile');
}

export default function CalmeraOtHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-high-exp-server-chile" />;
}
