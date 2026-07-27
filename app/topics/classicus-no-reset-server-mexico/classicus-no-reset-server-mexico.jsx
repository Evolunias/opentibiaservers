import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-no-reset-server-mexico');
}

export default function ClassicusNoResetServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="classicus-no-reset-server-mexico" />;
}
