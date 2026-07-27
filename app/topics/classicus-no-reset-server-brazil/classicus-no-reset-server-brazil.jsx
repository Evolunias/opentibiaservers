import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-no-reset-server-brazil');
}

export default function ClassicusNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="classicus-no-reset-server-brazil" />;
}
