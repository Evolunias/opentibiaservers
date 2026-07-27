import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-custom-map-server-chile');
}

export default function HarmoniaOtCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-custom-map-server-chile" />;
}
