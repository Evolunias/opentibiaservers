import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-no-reset-server-sweden');
}

export default function ClassicusNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="classicus-no-reset-server-sweden" />;
}
