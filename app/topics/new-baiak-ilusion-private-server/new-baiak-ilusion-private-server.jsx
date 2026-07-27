import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-baiak-ilusion-private-server');
}

export default function NewBaiakIlusionPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-baiak-ilusion-private-server" />;
}
