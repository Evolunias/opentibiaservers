import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-seasonal-server-chile');
}

export default function DuraOnlineSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="dura-online-seasonal-server-chile" />;
}
