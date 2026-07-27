import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-seasonal-server-sweden');
}

export default function ThaisotSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="thaisot-seasonal-server-sweden" />;
}
