import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-custom-map-server-france');
}

export default function MediviaCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="medivia-custom-map-server-france" />;
}
