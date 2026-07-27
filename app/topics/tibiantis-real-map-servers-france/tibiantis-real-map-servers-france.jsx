import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-real-map-servers-france');
}

export default function TibiantisRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-real-map-servers-france" />;
}
