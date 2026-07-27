import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-real-map-server-south-america');
}

export default function TibianusRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-real-map-server-south-america" />;
}
