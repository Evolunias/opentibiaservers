import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-baiak-ilusion-login');
}

export default function HighrateBaiakIlusionLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-baiak-ilusion-login" />;
}
