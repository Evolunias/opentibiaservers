import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-baiak-ilusion-server');
}

export default function CustomBaiakIlusionServerKeywordPage() {
  return <StaticKeywordPage slug="custom-baiak-ilusion-server" />;
}
