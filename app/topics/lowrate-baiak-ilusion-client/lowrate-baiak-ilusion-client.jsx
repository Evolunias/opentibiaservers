import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-baiak-ilusion-client');
}

export default function LowrateBaiakIlusionClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-baiak-ilusion-client" />;
}
