import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-seasonal-server-canada');
}

export default function RealeraSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="realera-seasonal-server-canada" />;
}
