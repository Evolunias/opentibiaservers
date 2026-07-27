import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-real-map-server-chile');
}

export default function HarmoniaOtRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-real-map-server-chile" />;
}
