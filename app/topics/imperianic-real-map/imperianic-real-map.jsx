import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-real-map');
}

export default function ImperianicRealMapKeywordPage() {
  return <StaticKeywordPage slug="imperianic-real-map" />;
}
