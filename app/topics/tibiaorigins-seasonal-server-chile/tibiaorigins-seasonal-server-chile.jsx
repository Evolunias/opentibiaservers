import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-seasonal-server-chile');
}

export default function TibiaoriginsSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-seasonal-server-chile" />;
}
