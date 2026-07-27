import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-14-seasonal-server');
}

export default function BaiakIlusion14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-14-seasonal-server" />;
}
