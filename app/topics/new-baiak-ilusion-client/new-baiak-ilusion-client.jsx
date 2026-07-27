import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-baiak-ilusion-client');
}

export default function NewBaiakIlusionClientKeywordPage() {
  return <StaticKeywordPage slug="new-baiak-ilusion-client" />;
}
