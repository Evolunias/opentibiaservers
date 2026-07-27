import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-custom-map-server-sweden');
}

export default function MidhemCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="midhem-custom-map-server-sweden" />;
}
