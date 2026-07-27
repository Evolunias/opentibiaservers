import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-baiak-ilusion-client');
}

export default function TopBaiakIlusionClientKeywordPage() {
  return <StaticKeywordPage slug="top-baiak-ilusion-client" />;
}
