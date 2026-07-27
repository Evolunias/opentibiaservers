import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-custom-map-server-chile');
}

export default function MediviaCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="medivia-custom-map-server-chile" />;
}
