import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-seasonal-server-argentina');
}

export default function SaintsotSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-seasonal-server-argentina" />;
}
