import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-custom-map-server-chile');
}

export default function LumineraCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="luminera-custom-map-server-chile" />;
}
