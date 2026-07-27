import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-15-custom-map-servers');
}

export default function BaiakIlusion15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-15-custom-map-servers" />;
}
