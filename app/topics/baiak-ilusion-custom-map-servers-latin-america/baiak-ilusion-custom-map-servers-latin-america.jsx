import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-custom-map-servers-latin-america');
}

export default function BaiakIlusionCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-custom-map-servers-latin-america" />;
}
