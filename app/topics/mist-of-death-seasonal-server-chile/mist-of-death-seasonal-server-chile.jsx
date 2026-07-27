import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-seasonal-server-chile');
}

export default function MistOfDeathSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-seasonal-server-chile" />;
}
