import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-custom-map-servers-france');
}

export default function NostaltherCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="nostalther-custom-map-servers-france" />;
}
