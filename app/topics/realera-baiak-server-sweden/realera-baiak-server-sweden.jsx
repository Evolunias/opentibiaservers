import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-baiak-server-sweden');
}

export default function RealeraBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="realera-baiak-server-sweden" />;
}
