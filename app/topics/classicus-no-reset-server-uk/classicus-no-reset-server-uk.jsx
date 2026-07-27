import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-no-reset-server-uk');
}

export default function ClassicusNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="classicus-no-reset-server-uk" />;
}
