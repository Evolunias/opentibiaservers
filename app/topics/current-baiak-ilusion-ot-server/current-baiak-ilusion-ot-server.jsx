import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-baiak-ilusion-ot-server');
}

export default function CurrentBaiakIlusionOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-baiak-ilusion-ot-server" />;
}
