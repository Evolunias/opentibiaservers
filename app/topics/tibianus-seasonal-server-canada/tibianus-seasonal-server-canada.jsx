import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-seasonal-server-canada');
}

export default function TibianusSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-seasonal-server-canada" />;
}
