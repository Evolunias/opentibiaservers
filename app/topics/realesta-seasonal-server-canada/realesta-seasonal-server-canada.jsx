import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-seasonal-server-canada');
}

export default function RealestaSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="realesta-seasonal-server-canada" />;
}
