import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-custom-map-server-north-america');
}

export default function ShadowcoresCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-custom-map-server-north-america" />;
}
