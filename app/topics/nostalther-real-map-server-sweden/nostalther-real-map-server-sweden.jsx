import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-real-map-server-sweden');
}

export default function NostaltherRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nostalther-real-map-server-sweden" />;
}
