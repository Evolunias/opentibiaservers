import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-real-map-servers-latin-america');
}

export default function ImperianicRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-real-map-servers-latin-america" />;
}
