import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-real-map-server-canada');
}

export default function ImperianicRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-real-map-server-canada" />;
}
