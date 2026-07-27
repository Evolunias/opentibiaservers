import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-real-map-server-poland');
}

export default function OriginaltibiaRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-real-map-server-poland" />;
}
