import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-custom-map-server-france');
}

export default function ImperianicCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="imperianic-custom-map-server-france" />;
}
