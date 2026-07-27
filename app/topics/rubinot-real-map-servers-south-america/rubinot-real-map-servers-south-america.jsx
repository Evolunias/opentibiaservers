import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-real-map-servers-south-america');
}

export default function RubinotRealMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-real-map-servers-south-america" />;
}
