import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-real-map-server-chile');
}

export default function AlasteraRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="alastera-real-map-server-chile" />;
}
