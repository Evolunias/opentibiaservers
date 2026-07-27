import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-custom-map-server-europe');
}

export default function ImperianicCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="imperianic-custom-map-server-europe" />;
}
