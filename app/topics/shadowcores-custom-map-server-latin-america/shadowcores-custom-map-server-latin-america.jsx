import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-custom-map-server-latin-america');
}

export default function ShadowcoresCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-custom-map-server-latin-america" />;
}
