import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-baiak-ilusion-client');
}

export default function CurrentBaiakIlusionClientKeywordPage() {
  return <StaticKeywordPage slug="current-baiak-ilusion-client" />;
}
