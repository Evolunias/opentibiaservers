import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-custom-map-servers-usa');
}

export default function ImperianicCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-custom-map-servers-usa" />;
}
