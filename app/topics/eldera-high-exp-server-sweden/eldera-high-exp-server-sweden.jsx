import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-high-exp-server-sweden');
}

export default function ElderaHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="eldera-high-exp-server-sweden" />;
}
