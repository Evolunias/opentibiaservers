import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-baiak-ilusion-ot-server');
}

export default function OfficialBaiakIlusionOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-baiak-ilusion-ot-server" />;
}
