import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-custom-map-servers-chile');
}

export default function OlderaCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="oldera-custom-map-servers-chile" />;
}
