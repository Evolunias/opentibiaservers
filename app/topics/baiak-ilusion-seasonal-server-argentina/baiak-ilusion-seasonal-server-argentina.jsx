import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-seasonal-server-argentina');
}

export default function BaiakIlusionSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-seasonal-server-argentina" />;
}
