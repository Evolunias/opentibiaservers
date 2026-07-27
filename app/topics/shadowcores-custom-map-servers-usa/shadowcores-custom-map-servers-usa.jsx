import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-custom-map-servers-usa');
}

export default function ShadowcoresCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-custom-map-servers-usa" />;
}
