import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-seasonal-server-north-america');
}

export default function SaintsotSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-seasonal-server-north-america" />;
}
