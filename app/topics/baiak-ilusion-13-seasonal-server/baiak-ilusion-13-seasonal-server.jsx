import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-13-seasonal-server');
}

export default function BaiakIlusion13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-13-seasonal-server" />;
}
