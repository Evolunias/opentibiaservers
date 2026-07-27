import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-custom-map-servers-chile');
}

export default function MediviaCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="medivia-custom-map-servers-chile" />;
}
