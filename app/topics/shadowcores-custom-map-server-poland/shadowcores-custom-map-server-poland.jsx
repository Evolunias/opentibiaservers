import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-custom-map-server-poland');
}

export default function ShadowcoresCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-custom-map-server-poland" />;
}
