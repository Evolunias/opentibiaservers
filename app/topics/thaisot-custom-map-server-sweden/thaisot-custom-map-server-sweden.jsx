import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-custom-map-server-sweden');
}

export default function ThaisotCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="thaisot-custom-map-server-sweden" />;
}
