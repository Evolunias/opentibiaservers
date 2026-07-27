import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('forgotten-server-sweden');
}

export default function ForgottenServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="forgotten-server-sweden" />;
}
