import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-baiak-ilusion-private-server');
}

export default function HighrateBaiakIlusionPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-baiak-ilusion-private-server" />;
}
