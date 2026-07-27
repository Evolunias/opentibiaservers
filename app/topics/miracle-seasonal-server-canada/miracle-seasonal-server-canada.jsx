import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-seasonal-server-canada');
}

export default function MiracleSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="miracle-seasonal-server-canada" />;
}
