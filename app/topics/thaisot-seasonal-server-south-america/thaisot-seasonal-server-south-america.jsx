import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-seasonal-server-south-america');
}

export default function ThaisotSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-seasonal-server-south-america" />;
}
