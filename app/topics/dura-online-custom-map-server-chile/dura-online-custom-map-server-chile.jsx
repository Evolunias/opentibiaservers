import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-custom-map-server-chile');
}

export default function DuraOnlineCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="dura-online-custom-map-server-chile" />;
}
