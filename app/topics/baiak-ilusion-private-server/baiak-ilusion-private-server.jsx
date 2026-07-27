import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-private-server');
}

export default function BaiakIlusionPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-private-server" />;
}
