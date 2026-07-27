import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-map');
}

export default function ImperianicMapKeywordPage() {
  return <StaticKeywordPage slug="imperianic-map" />;
}
