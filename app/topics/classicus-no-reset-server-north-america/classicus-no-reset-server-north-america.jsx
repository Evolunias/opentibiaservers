import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-no-reset-server-north-america');
}

export default function ClassicusNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-no-reset-server-north-america" />;
}
