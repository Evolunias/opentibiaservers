import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-seasonal-server-mexico');
}

export default function ThaisotSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="thaisot-seasonal-server-mexico" />;
}
