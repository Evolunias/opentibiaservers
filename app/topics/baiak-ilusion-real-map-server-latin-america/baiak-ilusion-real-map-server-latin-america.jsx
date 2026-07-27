import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-real-map-server-latin-america');
}

export default function BaiakIlusionRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-real-map-server-latin-america" />;
}
