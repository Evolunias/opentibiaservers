import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-15-custom-map-server');
}

export default function BaiakIlusion15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-15-custom-map-server" />;
}
