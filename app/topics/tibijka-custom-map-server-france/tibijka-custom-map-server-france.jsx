import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-custom-map-server-france');
}

export default function TibijkaCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibijka-custom-map-server-france" />;
}
