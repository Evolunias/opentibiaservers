import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-no-reset-server-france');
}

export default function ClassicusNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="classicus-no-reset-server-france" />;
}
