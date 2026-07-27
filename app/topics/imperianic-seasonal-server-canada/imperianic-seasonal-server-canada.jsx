import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-seasonal-server-canada');
}

export default function ImperianicSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-seasonal-server-canada" />;
}
