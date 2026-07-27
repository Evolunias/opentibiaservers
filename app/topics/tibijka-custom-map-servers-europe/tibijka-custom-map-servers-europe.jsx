import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-custom-map-servers-europe');
}

export default function TibijkaCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibijka-custom-map-servers-europe" />;
}
