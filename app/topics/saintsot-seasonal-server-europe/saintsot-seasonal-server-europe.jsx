import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-seasonal-server-europe');
}

export default function SaintsotSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="saintsot-seasonal-server-europe" />;
}
