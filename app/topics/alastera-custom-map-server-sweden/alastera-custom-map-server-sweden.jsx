import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-custom-map-server-sweden');
}

export default function AlasteraCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="alastera-custom-map-server-sweden" />;
}
