import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-real-map-server-chile');
}

export default function TibiantisRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-real-map-server-chile" />;
}
