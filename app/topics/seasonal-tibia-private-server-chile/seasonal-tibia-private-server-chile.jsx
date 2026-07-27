import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-tibia-private-server-chile');
}

export default function SeasonalTibiaPrivateServerChileKeywordPage() {
  return <StaticKeywordPage slug="seasonal-tibia-private-server-chile" />;
}
