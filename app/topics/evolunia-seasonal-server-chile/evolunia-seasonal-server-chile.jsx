import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-seasonal-server-chile');
}

export default function EvoluniaSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="evolunia-seasonal-server-chile" />;
}
