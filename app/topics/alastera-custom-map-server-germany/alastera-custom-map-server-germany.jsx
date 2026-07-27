import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-custom-map-server-germany');
}

export default function AlasteraCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="alastera-custom-map-server-germany" />;
}
