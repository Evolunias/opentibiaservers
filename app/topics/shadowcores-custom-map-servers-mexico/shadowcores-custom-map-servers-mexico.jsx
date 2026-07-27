import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-custom-map-servers-mexico');
}

export default function ShadowcoresCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-custom-map-servers-mexico" />;
}
