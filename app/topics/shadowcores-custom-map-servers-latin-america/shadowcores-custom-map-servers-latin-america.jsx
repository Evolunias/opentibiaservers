import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-custom-map-servers-latin-america');
}

export default function ShadowcoresCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-custom-map-servers-latin-america" />;
}
