import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-seasonal-server-brazil');
}

export default function BaiakIlusionSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-seasonal-server-brazil" />;
}
