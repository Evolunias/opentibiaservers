import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-real-map-servers-france');
}

export default function MediviaRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="medivia-real-map-servers-france" />;
}
