import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-baiak-ilusion-server');
}

export default function BestBaiakIlusionServerKeywordPage() {
  return <StaticKeywordPage slug="best-baiak-ilusion-server" />;
}
