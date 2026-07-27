import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-custom-map-server-sweden');
}

export default function UnlineCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="unline-custom-map-server-sweden" />;
}
