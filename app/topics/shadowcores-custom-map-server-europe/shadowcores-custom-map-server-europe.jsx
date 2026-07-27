import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-custom-map-server-europe');
}

export default function ShadowcoresCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-custom-map-server-europe" />;
}
