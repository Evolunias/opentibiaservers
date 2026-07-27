import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-9-6-baiak-server');
}

export default function BaiakIlusion96BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-9-6-baiak-server" />;
}
