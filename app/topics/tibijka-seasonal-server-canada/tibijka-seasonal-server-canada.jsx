import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-seasonal-server-canada');
}

export default function TibijkaSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-seasonal-server-canada" />;
}
