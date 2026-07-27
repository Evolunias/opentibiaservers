import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-no-reset-server-sweden');
}

export default function OlderaNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="oldera-no-reset-server-sweden" />;
}
