import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-baiak-ilusion-private-server');
}

export default function CustomBaiakIlusionPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-baiak-ilusion-private-server" />;
}
