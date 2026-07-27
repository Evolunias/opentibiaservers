import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-custom-map-servers-argentina');
}

export default function BaiakIlusionCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-custom-map-servers-argentina" />;
}
