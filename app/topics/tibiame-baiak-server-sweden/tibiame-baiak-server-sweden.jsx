import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-baiak-server-sweden');
}

export default function TibiameBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiame-baiak-server-sweden" />;
}
