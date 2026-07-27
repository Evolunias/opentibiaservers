import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-no-reset-server-argentina');
}

export default function ClassicusNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="classicus-no-reset-server-argentina" />;
}
