import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-custom-map-server-chile');
}

export default function CalmeraOtCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-custom-map-server-chile" />;
}
