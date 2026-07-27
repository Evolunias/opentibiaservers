import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-baiak-ilusion-ot-server');
}

export default function ActiveBaiakIlusionOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-baiak-ilusion-ot-server" />;
}
