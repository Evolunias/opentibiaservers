import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-real-map-servers-canada');
}

export default function ImperianicRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-real-map-servers-canada" />;
}
