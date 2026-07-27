import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-seasonal-server-chile');
}

export default function DemolidoresSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="demolidores-seasonal-server-chile" />;
}
