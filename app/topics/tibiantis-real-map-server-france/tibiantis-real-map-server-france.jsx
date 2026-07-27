import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-real-map-server-france');
}

export default function TibiantisRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-real-map-server-france" />;
}
