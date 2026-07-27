import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-real-map-servers-north-america');
}

export default function ImperianicRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-real-map-servers-north-america" />;
}
