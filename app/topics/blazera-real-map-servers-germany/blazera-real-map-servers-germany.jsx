import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-real-map-servers-germany');
}

export default function BlazeraRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="blazera-real-map-servers-germany" />;
}
