import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-seasonal-server-chile');
}

export default function SerenitySeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="serenity-seasonal-server-chile" />;
}
