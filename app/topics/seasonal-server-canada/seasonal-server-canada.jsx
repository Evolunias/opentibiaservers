import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-server-canada');
}

export default function SeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-server-canada" />;
}
