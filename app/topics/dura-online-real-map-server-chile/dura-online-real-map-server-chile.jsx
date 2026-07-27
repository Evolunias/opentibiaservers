import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-real-map-server-chile');
}

export default function DuraOnlineRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="dura-online-real-map-server-chile" />;
}
