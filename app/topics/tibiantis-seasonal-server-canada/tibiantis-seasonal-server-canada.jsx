import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-seasonal-server-canada');
}

export default function TibiantisSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-seasonal-server-canada" />;
}
