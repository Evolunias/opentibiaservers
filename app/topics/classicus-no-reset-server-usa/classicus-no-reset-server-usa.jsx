import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-no-reset-server-usa');
}

export default function ClassicusNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="classicus-no-reset-server-usa" />;
}
