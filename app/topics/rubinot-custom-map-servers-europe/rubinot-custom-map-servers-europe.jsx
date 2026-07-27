import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-custom-map-servers-europe');
}

export default function RubinotCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="rubinot-custom-map-servers-europe" />;
}
