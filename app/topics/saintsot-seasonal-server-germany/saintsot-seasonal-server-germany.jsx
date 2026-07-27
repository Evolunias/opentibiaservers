import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-seasonal-server-germany');
}

export default function SaintsotSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="saintsot-seasonal-server-germany" />;
}
