import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-custom-map-server-chile');
}

export default function AureraGlobalCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-custom-map-server-chile" />;
}
