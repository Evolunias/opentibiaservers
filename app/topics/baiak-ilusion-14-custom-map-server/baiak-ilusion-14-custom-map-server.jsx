import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-14-custom-map-server');
}

export default function BaiakIlusion14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-14-custom-map-server" />;
}
