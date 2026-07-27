import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-custom-map-servers-uk');
}

export default function RubinotCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="rubinot-custom-map-servers-uk" />;
}
