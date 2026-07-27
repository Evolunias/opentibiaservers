import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-real-map-servers-chile');
}

export default function MediviaRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="medivia-real-map-servers-chile" />;
}
