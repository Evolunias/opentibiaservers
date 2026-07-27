import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-10-0-custom-map-server');
}

export default function BaiakIlusion100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-10-0-custom-map-server" />;
}
