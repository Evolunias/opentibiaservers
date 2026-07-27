import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-real-map-servers-mexico');
}

export default function BlazeraRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="blazera-real-map-servers-mexico" />;
}
