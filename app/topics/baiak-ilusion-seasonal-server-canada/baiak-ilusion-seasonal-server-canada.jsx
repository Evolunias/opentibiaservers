import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-seasonal-server-canada');
}

export default function BaiakIlusionSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-seasonal-server-canada" />;
}
