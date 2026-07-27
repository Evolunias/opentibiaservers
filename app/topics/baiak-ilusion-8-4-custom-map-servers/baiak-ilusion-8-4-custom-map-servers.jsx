import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-8-4-custom-map-servers');
}

export default function BaiakIlusion84CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-8-4-custom-map-servers" />;
}
