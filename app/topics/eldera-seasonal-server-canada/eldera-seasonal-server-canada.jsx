import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-seasonal-server-canada');
}

export default function ElderaSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="eldera-seasonal-server-canada" />;
}
