import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-baiak-ilusion-server');
}

export default function TopBaiakIlusionServerKeywordPage() {
  return <StaticKeywordPage slug="top-baiak-ilusion-server" />;
}
