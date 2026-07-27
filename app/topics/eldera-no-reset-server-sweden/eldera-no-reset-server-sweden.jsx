import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-no-reset-server-sweden');
}

export default function ElderaNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="eldera-no-reset-server-sweden" />;
}
