import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-real-map-server-europe');
}

export default function NostaltherRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nostalther-real-map-server-europe" />;
}
