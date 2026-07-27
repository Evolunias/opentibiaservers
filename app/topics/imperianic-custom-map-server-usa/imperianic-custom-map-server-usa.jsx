import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-custom-map-server-usa');
}

export default function ImperianicCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-custom-map-server-usa" />;
}
