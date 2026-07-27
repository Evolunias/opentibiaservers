import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-custom-map-server-europe');
}

export default function NostaltherCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nostalther-custom-map-server-europe" />;
}
