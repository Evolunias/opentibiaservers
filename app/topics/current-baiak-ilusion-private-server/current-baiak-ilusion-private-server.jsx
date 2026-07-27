import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-baiak-ilusion-private-server');
}

export default function CurrentBaiakIlusionPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-baiak-ilusion-private-server" />;
}
