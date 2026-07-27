import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-custom-map-server-germany');
}

export default function ShadowcoresCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-custom-map-server-germany" />;
}
