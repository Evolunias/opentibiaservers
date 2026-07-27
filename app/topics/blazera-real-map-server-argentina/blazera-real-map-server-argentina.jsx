import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-real-map-server-argentina');
}

export default function BlazeraRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="blazera-real-map-server-argentina" />;
}
