import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-real-map-server-mexico');
}

export default function BlazeraRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="blazera-real-map-server-mexico" />;
}
