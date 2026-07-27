import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-seasonal-server-uk');
}

export default function BaiakIlusionSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-seasonal-server-uk" />;
}
