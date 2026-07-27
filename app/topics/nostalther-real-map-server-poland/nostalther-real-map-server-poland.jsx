import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-real-map-server-poland');
}

export default function NostaltherRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nostalther-real-map-server-poland" />;
}
