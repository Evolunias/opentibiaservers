import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-custom-map-server-uk');
}

export default function ShadowcoresCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-custom-map-server-uk" />;
}
