import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-custom-map-servers-mexico');
}

export default function ImperianicCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="imperianic-custom-map-servers-mexico" />;
}
