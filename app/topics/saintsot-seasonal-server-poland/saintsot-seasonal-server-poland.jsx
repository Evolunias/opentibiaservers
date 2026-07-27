import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-seasonal-server-poland');
}

export default function SaintsotSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="saintsot-seasonal-server-poland" />;
}
