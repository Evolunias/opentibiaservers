import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-seasonal-server-argentina');
}

export default function ThaisotSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-seasonal-server-argentina" />;
}
