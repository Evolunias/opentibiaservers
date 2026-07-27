import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-real-map-servers-chile');
}

export default function HarmoniaOtRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-real-map-servers-chile" />;
}
