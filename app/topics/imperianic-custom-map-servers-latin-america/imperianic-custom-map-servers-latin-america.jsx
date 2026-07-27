import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-custom-map-servers-latin-america');
}

export default function ImperianicCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-custom-map-servers-latin-america" />;
}
