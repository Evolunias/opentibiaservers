import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-baiak-ilusion-private-server');
}

export default function PopularBaiakIlusionPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-baiak-ilusion-private-server" />;
}
