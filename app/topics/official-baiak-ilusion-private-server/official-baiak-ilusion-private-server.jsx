import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-baiak-ilusion-private-server');
}

export default function OfficialBaiakIlusionPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-baiak-ilusion-private-server" />;
}
