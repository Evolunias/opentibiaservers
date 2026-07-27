import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-custom-map-servers-germany');
}

export default function AlasteraCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="alastera-custom-map-servers-germany" />;
}
