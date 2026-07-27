import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-custom-map-server-uk');
}

export default function NostaltherCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="nostalther-custom-map-server-uk" />;
}
