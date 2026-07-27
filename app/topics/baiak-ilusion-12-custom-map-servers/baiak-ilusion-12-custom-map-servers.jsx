import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-12-custom-map-servers');
}

export default function BaiakIlusion12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-12-custom-map-servers" />;
}
