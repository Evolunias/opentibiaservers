import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-real-map-servers-france');
}

export default function RubinotRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="rubinot-real-map-servers-france" />;
}
