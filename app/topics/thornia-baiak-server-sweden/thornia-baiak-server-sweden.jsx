import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-baiak-server-sweden');
}

export default function ThorniaBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="thornia-baiak-server-sweden" />;
}
