import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-baiak-ilusion-client');
}

export default function OfficialBaiakIlusionClientKeywordPage() {
  return <StaticKeywordPage slug="official-baiak-ilusion-client" />;
}
