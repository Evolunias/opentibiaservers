import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-custom-map-servers-uk');
}

export default function AlasteraCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="alastera-custom-map-servers-uk" />;
}
