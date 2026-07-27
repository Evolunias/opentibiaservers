import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-custom-map-server-latin-america');
}

export default function ImperianicCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-custom-map-server-latin-america" />;
}
