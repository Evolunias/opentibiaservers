import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-custom-map-servers-germany');
}

export default function ShadowcoresCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-custom-map-servers-germany" />;
}
