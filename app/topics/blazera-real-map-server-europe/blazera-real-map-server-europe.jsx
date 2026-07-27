import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-real-map-server-europe');
}

export default function BlazeraRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="blazera-real-map-server-europe" />;
}
