import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-no-reset-server-north-america');
}

export default function ClassickDrakoriaNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-no-reset-server-north-america" />;
}
