import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-seasonal-server-chile');
}

export default function NostaltherSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="nostalther-seasonal-server-chile" />;
}
