import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-real-map-server-brazil');
}

export default function BlazeraRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="blazera-real-map-server-brazil" />;
}
