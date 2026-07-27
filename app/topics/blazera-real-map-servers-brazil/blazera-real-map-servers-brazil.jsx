import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-real-map-servers-brazil');
}

export default function BlazeraRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="blazera-real-map-servers-brazil" />;
}
