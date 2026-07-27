import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-custom-map-server-sweden');
}

export default function MiracleCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="miracle-custom-map-server-sweden" />;
}
