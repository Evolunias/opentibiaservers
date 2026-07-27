import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-seasonal-server-canada');
}

export default function OlderaSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="oldera-seasonal-server-canada" />;
}
