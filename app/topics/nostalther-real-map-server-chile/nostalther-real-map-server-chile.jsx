import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-real-map-server-chile');
}

export default function NostaltherRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="nostalther-real-map-server-chile" />;
}
