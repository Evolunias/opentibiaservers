import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-baiak-ilusion-server');
}

export default function PvpBaiakIlusionServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-baiak-ilusion-server" />;
}
