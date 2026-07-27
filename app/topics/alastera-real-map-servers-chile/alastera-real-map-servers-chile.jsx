import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-real-map-servers-chile');
}

export default function AlasteraRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="alastera-real-map-servers-chile" />;
}
