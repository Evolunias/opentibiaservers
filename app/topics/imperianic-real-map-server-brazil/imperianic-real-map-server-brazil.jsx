import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-real-map-server-brazil');
}

export default function ImperianicRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="imperianic-real-map-server-brazil" />;
}
