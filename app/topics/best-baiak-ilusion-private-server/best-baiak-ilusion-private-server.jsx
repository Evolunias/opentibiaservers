import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-baiak-ilusion-private-server');
}

export default function BestBaiakIlusionPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-baiak-ilusion-private-server" />;
}
