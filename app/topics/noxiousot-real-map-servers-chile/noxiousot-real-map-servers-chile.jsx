import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-real-map-servers-chile');
}

export default function NoxiousotRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-real-map-servers-chile" />;
}
