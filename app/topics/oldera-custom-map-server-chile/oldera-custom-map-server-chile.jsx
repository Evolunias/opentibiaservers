import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-custom-map-server-chile');
}

export default function OlderaCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="oldera-custom-map-server-chile" />;
}
