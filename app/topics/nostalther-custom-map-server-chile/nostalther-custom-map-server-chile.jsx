import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-custom-map-server-chile');
}

export default function NostaltherCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="nostalther-custom-map-server-chile" />;
}
