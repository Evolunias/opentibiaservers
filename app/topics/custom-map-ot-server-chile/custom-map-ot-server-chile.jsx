import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-ot-server-chile');
}

export default function CustomMapOtServerChileKeywordPage() {
  return <StaticKeywordPage slug="custom-map-ot-server-chile" />;
}
