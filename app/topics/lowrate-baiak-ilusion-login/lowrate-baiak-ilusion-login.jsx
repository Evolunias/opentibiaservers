import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-baiak-ilusion-login');
}

export default function LowrateBaiakIlusionLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-baiak-ilusion-login" />;
}
