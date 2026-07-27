import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-custom-map-servers-uk');
}

export default function CalmeraOtCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-custom-map-servers-uk" />;
}
