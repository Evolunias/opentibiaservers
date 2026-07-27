import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-14-custom-map-servers');
}

export default function BaiakIlusion14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-14-custom-map-servers" />;
}
