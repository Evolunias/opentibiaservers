import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-baiak-server-chile');
}

export default function CalmeraOtBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-baiak-server-chile" />;
}
