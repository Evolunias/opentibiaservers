import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-real-map-server-poland');
}

export default function BlazeraRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="blazera-real-map-server-poland" />;
}
