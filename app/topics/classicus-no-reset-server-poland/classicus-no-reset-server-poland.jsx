import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-no-reset-server-poland');
}

export default function ClassicusNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="classicus-no-reset-server-poland" />;
}
