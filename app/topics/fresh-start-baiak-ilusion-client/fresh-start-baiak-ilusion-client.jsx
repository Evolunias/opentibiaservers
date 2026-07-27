import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-baiak-ilusion-client');
}

export default function FreshStartBaiakIlusionClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-baiak-ilusion-client" />;
}
