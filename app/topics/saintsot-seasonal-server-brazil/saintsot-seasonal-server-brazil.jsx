import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-seasonal-server-brazil');
}

export default function SaintsotSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="saintsot-seasonal-server-brazil" />;
}
