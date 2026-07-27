import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-custom-map-server-uk');
}

export default function ImperianicCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="imperianic-custom-map-server-uk" />;
}
