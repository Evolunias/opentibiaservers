import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-custom-map-server-sweden');
}

export default function RealestaCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="realesta-custom-map-server-sweden" />;
}
