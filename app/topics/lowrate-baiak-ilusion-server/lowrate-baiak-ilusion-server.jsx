import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-baiak-ilusion-server');
}

export default function LowrateBaiakIlusionServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-baiak-ilusion-server" />;
}
