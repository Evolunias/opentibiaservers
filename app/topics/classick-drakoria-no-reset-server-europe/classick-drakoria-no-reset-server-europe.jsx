import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-no-reset-server-europe');
}

export default function ClassickDrakoriaNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-no-reset-server-europe" />;
}
