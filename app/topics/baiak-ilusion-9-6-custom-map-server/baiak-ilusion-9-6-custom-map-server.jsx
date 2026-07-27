import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-9-6-custom-map-server');
}

export default function BaiakIlusion96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-9-6-custom-map-server" />;
}
