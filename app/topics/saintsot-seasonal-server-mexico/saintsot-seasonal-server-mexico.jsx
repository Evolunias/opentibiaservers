import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-seasonal-server-mexico');
}

export default function SaintsotSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="saintsot-seasonal-server-mexico" />;
}
