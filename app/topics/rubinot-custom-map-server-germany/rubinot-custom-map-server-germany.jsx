import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-custom-map-server-germany');
}

export default function RubinotCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="rubinot-custom-map-server-germany" />;
}
