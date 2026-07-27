import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-seasonal-server-sweden');
}

export default function BaiakIlusionSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-seasonal-server-sweden" />;
}
