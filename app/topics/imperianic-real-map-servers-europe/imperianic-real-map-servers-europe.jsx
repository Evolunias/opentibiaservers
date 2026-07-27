import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-real-map-servers-europe');
}

export default function ImperianicRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="imperianic-real-map-servers-europe" />;
}
