import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-seasonal-server-germany');
}

export default function BaiakIlusionSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-seasonal-server-germany" />;
}
