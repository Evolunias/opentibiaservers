import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-real-map-server-chile');
}

export default function NoxiousotRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-real-map-server-chile" />;
}
