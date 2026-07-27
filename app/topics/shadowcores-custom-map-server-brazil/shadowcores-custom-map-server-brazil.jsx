import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-custom-map-server-brazil');
}

export default function ShadowcoresCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-custom-map-server-brazil" />;
}
