import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-custom-map-servers-france');
}

export default function ImperianicCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="imperianic-custom-map-servers-france" />;
}
