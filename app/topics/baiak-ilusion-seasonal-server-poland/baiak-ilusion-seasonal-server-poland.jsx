import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-seasonal-server-poland');
}

export default function BaiakIlusionSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-seasonal-server-poland" />;
}
