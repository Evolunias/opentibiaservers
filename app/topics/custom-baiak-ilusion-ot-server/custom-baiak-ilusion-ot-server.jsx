import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-baiak-ilusion-ot-server');
}

export default function CustomBaiakIlusionOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-baiak-ilusion-ot-server" />;
}
