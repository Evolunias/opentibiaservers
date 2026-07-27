import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-baiak-ilusion-private-server');
}

export default function ActiveBaiakIlusionPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-baiak-ilusion-private-server" />;
}
