import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-real-map-servers-france');
}

export default function TibiameRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiame-real-map-servers-france" />;
}
