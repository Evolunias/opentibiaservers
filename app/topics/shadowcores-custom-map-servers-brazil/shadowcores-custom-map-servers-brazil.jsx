import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-custom-map-servers-brazil');
}

export default function ShadowcoresCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-custom-map-servers-brazil" />;
}
