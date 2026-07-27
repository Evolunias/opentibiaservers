import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-custom-map-server-chile');
}

export default function ElderaCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="eldera-custom-map-server-chile" />;
}
