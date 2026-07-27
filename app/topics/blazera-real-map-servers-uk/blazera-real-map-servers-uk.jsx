import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-real-map-servers-uk');
}

export default function BlazeraRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="blazera-real-map-servers-uk" />;
}
