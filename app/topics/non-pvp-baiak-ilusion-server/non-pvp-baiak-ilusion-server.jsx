import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-baiak-ilusion-server');
}

export default function NonPvpBaiakIlusionServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-baiak-ilusion-server" />;
}
