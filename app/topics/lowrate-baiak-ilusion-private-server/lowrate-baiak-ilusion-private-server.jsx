import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-baiak-ilusion-private-server');
}

export default function LowrateBaiakIlusionPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-baiak-ilusion-private-server" />;
}
