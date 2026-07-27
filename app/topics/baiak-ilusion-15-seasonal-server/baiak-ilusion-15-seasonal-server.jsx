import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-15-seasonal-server');
}

export default function BaiakIlusion15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-15-seasonal-server" />;
}
