import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-baiak-ilusion-ot-server');
}

export default function TopBaiakIlusionOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-baiak-ilusion-ot-server" />;
}
