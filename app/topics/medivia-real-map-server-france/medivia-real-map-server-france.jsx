import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-real-map-server-france');
}

export default function MediviaRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="medivia-real-map-server-france" />;
}
