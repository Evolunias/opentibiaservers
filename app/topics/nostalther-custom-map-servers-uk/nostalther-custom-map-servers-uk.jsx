import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-custom-map-servers-uk');
}

export default function NostaltherCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="nostalther-custom-map-servers-uk" />;
}
