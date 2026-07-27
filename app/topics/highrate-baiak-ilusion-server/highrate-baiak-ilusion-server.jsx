import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-baiak-ilusion-server');
}

export default function HighrateBaiakIlusionServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-baiak-ilusion-server" />;
}
