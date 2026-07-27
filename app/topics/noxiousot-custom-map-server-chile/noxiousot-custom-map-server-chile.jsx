import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-custom-map-server-chile');
}

export default function NoxiousotCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-custom-map-server-chile" />;
}
