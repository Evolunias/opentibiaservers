import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-custom-map-servers-uk');
}

export default function TibijkaCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="tibijka-custom-map-servers-uk" />;
}
