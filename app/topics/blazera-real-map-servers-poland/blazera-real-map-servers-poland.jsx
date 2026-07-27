import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-real-map-servers-poland');
}

export default function BlazeraRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="blazera-real-map-servers-poland" />;
}
