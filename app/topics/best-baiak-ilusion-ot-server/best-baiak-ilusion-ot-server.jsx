import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-baiak-ilusion-ot-server');
}

export default function BestBaiakIlusionOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-baiak-ilusion-ot-server" />;
}
