import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-real-map-server-north-america');
}

export default function ImperianicRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-real-map-server-north-america" />;
}
