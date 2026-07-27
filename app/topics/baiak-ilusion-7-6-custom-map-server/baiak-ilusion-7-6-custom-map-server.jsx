import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-7-6-custom-map-server');
}

export default function BaiakIlusion76CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-7-6-custom-map-server" />;
}
