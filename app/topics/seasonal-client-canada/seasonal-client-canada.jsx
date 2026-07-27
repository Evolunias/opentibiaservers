import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-client-canada');
}

export default function SeasonalClientCanadaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-client-canada" />;
}
