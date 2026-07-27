import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-baiak-server-sweden');
}

export default function RealestaBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="realesta-baiak-server-sweden" />;
}
