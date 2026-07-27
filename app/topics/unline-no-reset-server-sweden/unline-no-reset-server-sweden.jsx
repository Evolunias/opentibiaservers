import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-no-reset-server-sweden');
}

export default function UnlineNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="unline-no-reset-server-sweden" />;
}
