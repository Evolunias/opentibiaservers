import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-custom-map-servers-france');
}

export default function RealeraCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="realera-custom-map-servers-france" />;
}
