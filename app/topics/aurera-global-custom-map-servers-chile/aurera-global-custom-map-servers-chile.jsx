import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-custom-map-servers-chile');
}

export default function AureraGlobalCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-custom-map-servers-chile" />;
}
