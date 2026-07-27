import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-custom-map-servers-chile');
}

export default function NoxiousotCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-custom-map-servers-chile" />;
}
