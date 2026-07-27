import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-server-sweden');
}

export default function NoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="no-reset-server-sweden" />;
}
