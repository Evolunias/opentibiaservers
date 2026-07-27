import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-real-map-server-sweden');
}

export default function MediviaRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="medivia-real-map-server-sweden" />;
}
