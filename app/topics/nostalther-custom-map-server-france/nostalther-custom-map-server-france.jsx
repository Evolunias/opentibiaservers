import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-custom-map-server-france');
}

export default function NostaltherCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nostalther-custom-map-server-france" />;
}
