import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-custom-map-servers-chile');
}

export default function HarmoniaOtCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-custom-map-servers-chile" />;
}
