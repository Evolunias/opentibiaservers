import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-real-map-server-uk');
}

export default function BlazeraRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="blazera-real-map-server-uk" />;
}
