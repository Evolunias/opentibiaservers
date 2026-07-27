import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-seasonal-server-north-america');
}

export default function BaiakIlusionSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-seasonal-server-north-america" />;
}
