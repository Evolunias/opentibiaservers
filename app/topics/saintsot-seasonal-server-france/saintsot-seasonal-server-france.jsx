import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-seasonal-server-france');
}

export default function SaintsotSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="saintsot-seasonal-server-france" />;
}
