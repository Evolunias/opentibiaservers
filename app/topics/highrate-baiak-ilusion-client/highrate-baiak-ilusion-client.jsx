import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-baiak-ilusion-client');
}

export default function HighrateBaiakIlusionClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-baiak-ilusion-client" />;
}
