import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-real-map-server-usa');
}

export default function ImperianicRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-real-map-server-usa" />;
}
