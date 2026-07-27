import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-real-map-servers-chile');
}

export default function DuraOnlineRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="dura-online-real-map-servers-chile" />;
}
