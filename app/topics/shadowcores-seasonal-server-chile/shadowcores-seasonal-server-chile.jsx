import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-seasonal-server-chile');
}

export default function ShadowcoresSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-seasonal-server-chile" />;
}
