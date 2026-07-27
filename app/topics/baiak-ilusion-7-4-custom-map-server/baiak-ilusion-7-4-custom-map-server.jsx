import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-7-4-custom-map-server');
}

export default function BaiakIlusion74CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-7-4-custom-map-server" />;
}
