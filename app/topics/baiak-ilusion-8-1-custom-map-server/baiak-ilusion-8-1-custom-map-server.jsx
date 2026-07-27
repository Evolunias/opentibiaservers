import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-8-1-custom-map-server');
}

export default function BaiakIlusion81CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-8-1-custom-map-server" />;
}
