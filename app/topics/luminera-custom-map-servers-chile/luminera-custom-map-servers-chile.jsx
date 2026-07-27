import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-custom-map-servers-chile');
}

export default function LumineraCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="luminera-custom-map-servers-chile" />;
}
