import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-11-custom-map-server');
}

export default function BaiakIlusion11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-11-custom-map-server" />;
}
