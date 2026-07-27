import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-custom-map-servers-europe');
}

export default function NostaltherCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="nostalther-custom-map-servers-europe" />;
}
