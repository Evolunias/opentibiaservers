import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-custom-map-servers-europe');
}

export default function ImperianicCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="imperianic-custom-map-servers-europe" />;
}
