import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-seasonal-server-latin-america');
}

export default function SaintsotSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-seasonal-server-latin-america" />;
}
