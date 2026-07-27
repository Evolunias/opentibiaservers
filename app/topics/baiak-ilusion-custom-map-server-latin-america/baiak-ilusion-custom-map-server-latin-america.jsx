import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-custom-map-server-latin-america');
}

export default function BaiakIlusionCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-custom-map-server-latin-america" />;
}
