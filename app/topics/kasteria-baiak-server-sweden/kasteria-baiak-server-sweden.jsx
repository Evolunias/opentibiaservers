import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-baiak-server-sweden');
}

export default function KasteriaBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="kasteria-baiak-server-sweden" />;
}
