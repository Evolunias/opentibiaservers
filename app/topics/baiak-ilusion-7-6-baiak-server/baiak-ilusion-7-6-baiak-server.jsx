import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-7-6-baiak-server');
}

export default function BaiakIlusion76BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-7-6-baiak-server" />;
}
