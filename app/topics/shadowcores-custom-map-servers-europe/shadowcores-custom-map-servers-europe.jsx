import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-custom-map-servers-europe');
}

export default function ShadowcoresCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-custom-map-servers-europe" />;
}
