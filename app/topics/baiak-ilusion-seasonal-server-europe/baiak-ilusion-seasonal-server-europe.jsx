import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-seasonal-server-europe');
}

export default function BaiakIlusionSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-seasonal-server-europe" />;
}
