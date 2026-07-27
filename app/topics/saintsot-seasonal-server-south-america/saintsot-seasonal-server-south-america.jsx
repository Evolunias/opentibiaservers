import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-seasonal-server-south-america');
}

export default function SaintsotSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-seasonal-server-south-america" />;
}
