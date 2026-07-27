import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-custom-map-server-sweden');
}

export default function TibijkaCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibijka-custom-map-server-sweden" />;
}
