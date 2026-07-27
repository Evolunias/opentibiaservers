import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-custom-map-servers-poland');
}

export default function RubinotCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="rubinot-custom-map-servers-poland" />;
}
