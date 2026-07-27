import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-baiak-ilusion-client');
}

export default function CustomBaiakIlusionClientKeywordPage() {
  return <StaticKeywordPage slug="custom-baiak-ilusion-client" />;
}
