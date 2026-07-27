import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-custom-map-server-europe');
}

export default function TibijkaCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibijka-custom-map-server-europe" />;
}
