import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-real-map-server-south-america');
}

export default function OlderaRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-real-map-server-south-america" />;
}
