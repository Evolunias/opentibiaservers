import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-seasonal-server-canada');
}

export default function OriginaltibiaSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-seasonal-server-canada" />;
}
