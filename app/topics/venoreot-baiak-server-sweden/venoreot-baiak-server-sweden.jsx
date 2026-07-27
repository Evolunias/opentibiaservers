import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-baiak-server-sweden');
}

export default function VenoreotBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="venoreot-baiak-server-sweden" />;
}
