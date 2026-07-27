import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-no-reset-server-germany');
}

export default function ClassicusNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="classicus-no-reset-server-germany" />;
}
