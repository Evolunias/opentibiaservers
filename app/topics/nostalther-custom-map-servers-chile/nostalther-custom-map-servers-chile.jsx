import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-custom-map-servers-chile');
}

export default function NostaltherCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="nostalther-custom-map-servers-chile" />;
}
