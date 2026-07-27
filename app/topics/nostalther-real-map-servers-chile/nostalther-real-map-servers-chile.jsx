import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-real-map-servers-chile');
}

export default function NostaltherRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="nostalther-real-map-servers-chile" />;
}
