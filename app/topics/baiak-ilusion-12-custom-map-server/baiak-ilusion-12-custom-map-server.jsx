import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-12-custom-map-server');
}

export default function BaiakIlusion12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-12-custom-map-server" />;
}
