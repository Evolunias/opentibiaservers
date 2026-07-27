import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-real-map-server-europe');
}

export default function ImperianicRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="imperianic-real-map-server-europe" />;
}
