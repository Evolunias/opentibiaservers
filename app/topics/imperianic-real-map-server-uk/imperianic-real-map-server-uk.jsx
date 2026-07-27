import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-real-map-server-uk');
}

export default function ImperianicRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="imperianic-real-map-server-uk" />;
}
