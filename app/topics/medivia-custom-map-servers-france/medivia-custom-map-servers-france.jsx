import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-custom-map-servers-france');
}

export default function MediviaCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="medivia-custom-map-servers-france" />;
}
