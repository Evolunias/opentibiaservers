import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-real-map-server-sweden');
}

export default function TibiantisRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-real-map-server-sweden" />;
}
