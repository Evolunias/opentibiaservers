import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-real-map-servers-mexico');
}

export default function ImperianicRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="imperianic-real-map-servers-mexico" />;
}
