import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-no-reset-server-france');
}

export default function ClassickDrakoriaNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-no-reset-server-france" />;
}
