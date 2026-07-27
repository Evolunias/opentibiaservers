import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-custom-map-servers-uk');
}

export default function ShadowcoresCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-custom-map-servers-uk" />;
}
