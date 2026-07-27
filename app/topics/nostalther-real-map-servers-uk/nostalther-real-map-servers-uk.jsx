import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-real-map-servers-uk');
}

export default function NostaltherRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="nostalther-real-map-servers-uk" />;
}
