import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-real-map-server-chile');
}

export default function CalmeraOtRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-real-map-server-chile" />;
}
