import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-real-map-servers-europe');
}

export default function NostaltherRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="nostalther-real-map-servers-europe" />;
}
