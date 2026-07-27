import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-7-4-seasonal-server');
}

export default function BaiakIlusion74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-7-4-seasonal-server" />;
}
