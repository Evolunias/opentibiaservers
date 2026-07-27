import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-real-map-servers-europe');
}

export default function BlazeraRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="blazera-real-map-servers-europe" />;
}
