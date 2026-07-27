import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-seasonal-server-canada');
}

export default function SaintsotSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-seasonal-server-canada" />;
}
