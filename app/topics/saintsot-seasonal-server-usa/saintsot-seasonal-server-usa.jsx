import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-seasonal-server-usa');
}

export default function SaintsotSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-seasonal-server-usa" />;
}
