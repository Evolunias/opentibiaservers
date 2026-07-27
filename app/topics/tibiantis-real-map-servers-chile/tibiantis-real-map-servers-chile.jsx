import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-real-map-servers-chile');
}

export default function TibiantisRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-real-map-servers-chile" />;
}
