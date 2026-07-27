import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-custom-map-server-sweden');
}

export default function TibiantisCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-custom-map-server-sweden" />;
}
