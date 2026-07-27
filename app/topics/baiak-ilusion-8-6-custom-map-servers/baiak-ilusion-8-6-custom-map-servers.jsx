import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-8-6-custom-map-servers');
}

export default function BaiakIlusion86CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-8-6-custom-map-servers" />;
}
