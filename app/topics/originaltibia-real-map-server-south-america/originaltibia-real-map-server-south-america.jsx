import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-real-map-server-south-america');
}

export default function OriginaltibiaRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-real-map-server-south-america" />;
}
