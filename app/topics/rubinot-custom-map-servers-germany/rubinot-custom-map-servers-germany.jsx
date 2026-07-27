import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-custom-map-servers-germany');
}

export default function RubinotCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="rubinot-custom-map-servers-germany" />;
}
