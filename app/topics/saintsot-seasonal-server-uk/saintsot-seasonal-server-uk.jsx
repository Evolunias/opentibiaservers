import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-seasonal-server-uk');
}

export default function SaintsotSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="saintsot-seasonal-server-uk" />;
}
