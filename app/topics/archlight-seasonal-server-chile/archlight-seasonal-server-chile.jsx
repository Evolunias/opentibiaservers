import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-seasonal-server-chile');
}

export default function ArchlightSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="archlight-seasonal-server-chile" />;
}
