import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-baiak-ilusion-server');
}

export default function SeasonalBaiakIlusionServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-baiak-ilusion-server" />;
}
