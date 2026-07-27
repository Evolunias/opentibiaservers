import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-8-6-baiak-server');
}

export default function BaiakIlusion86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-8-6-baiak-server" />;
}
