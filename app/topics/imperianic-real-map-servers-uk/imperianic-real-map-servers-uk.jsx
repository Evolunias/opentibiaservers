import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-real-map-servers-uk');
}

export default function ImperianicRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="imperianic-real-map-servers-uk" />;
}
