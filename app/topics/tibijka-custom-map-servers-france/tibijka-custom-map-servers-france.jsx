import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-custom-map-servers-france');
}

export default function TibijkaCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="tibijka-custom-map-servers-france" />;
}
