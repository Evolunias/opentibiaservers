import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-real-map-server-germany');
}

export default function OriginaltibiaRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-real-map-server-germany" />;
}
