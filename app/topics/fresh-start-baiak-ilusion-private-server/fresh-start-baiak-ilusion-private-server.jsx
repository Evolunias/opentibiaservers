import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-baiak-ilusion-private-server');
}

export default function FreshStartBaiakIlusionPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-baiak-ilusion-private-server" />;
}
