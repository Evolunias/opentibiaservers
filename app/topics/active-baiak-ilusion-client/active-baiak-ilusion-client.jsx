import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-baiak-ilusion-client');
}

export default function ActiveBaiakIlusionClientKeywordPage() {
  return <StaticKeywordPage slug="active-baiak-ilusion-client" />;
}
