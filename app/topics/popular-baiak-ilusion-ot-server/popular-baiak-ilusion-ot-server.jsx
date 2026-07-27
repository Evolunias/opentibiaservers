import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-baiak-ilusion-ot-server');
}

export default function PopularBaiakIlusionOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-baiak-ilusion-ot-server" />;
}
