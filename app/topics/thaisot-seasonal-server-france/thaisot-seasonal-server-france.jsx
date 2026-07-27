import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-seasonal-server-france');
}

export default function ThaisotSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="thaisot-seasonal-server-france" />;
}
