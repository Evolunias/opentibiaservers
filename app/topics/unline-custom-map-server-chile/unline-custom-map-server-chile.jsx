import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-custom-map-server-chile');
}

export default function UnlineCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="unline-custom-map-server-chile" />;
}
