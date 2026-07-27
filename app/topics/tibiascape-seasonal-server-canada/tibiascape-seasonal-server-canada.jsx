import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-seasonal-server-canada');
}

export default function TibiascapeSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-seasonal-server-canada" />;
}
