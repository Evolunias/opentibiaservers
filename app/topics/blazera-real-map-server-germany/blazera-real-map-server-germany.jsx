import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-real-map-server-germany');
}

export default function BlazeraRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="blazera-real-map-server-germany" />;
}
