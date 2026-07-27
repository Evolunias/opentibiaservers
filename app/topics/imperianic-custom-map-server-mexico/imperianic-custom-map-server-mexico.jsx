import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-custom-map-server-mexico');
}

export default function ImperianicCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="imperianic-custom-map-server-mexico" />;
}
