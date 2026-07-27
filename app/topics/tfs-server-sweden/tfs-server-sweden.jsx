import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tfs-server-sweden');
}

export default function TfsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tfs-server-sweden" />;
}
