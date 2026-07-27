import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-8-4-seasonal-server');
}

export default function BaiakIlusion84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-8-4-seasonal-server" />;
}
