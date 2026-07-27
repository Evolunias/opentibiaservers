import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-seasonal-server-chile');
}

export default function NilotSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="nilot-seasonal-server-chile" />;
}
