import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-baiak-ilusion-login');
}

export default function OfficialBaiakIlusionLoginKeywordPage() {
  return <StaticKeywordPage slug="official-baiak-ilusion-login" />;
}
