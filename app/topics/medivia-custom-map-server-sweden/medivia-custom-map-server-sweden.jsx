import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-custom-map-server-sweden');
}

export default function MediviaCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="medivia-custom-map-server-sweden" />;
}
