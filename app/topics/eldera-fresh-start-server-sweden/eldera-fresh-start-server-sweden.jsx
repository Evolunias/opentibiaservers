import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-fresh-start-server-sweden');
}

export default function ElderaFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="eldera-fresh-start-server-sweden" />;
}
