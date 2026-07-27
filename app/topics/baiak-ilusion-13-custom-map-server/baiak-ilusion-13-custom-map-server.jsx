import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-13-custom-map-server');
}

export default function BaiakIlusion13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-13-custom-map-server" />;
}
