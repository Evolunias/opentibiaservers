import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-real-map-servers-argentina');
}

export default function BlazeraRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="blazera-real-map-servers-argentina" />;
}
