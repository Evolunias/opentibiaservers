import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-no-reset-server-sweden');
}

export default function ClassickDrakoriaNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-no-reset-server-sweden" />;
}
