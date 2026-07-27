import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-fresh-start-server-sweden');
}

export default function OlderaFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="oldera-fresh-start-server-sweden" />;
}
