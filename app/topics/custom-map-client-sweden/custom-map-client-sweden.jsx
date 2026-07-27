import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-client-sweden');
}

export default function CustomMapClientSwedenKeywordPage() {
  return <StaticKeywordPage slug="custom-map-client-sweden" />;
}
