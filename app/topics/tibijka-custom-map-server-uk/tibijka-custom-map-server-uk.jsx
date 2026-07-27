import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-custom-map-server-uk');
}

export default function TibijkaCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibijka-custom-map-server-uk" />;
}
