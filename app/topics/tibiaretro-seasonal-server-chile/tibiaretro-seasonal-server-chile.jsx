import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-seasonal-server-chile');
}

export default function TibiaretroSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-seasonal-server-chile" />;
}
