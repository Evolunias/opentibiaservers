import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-seasonal-server-usa');
}

export default function BaiakIlusionSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-seasonal-server-usa" />;
}
