import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-europe-server');
}

export default function ClassickDrakoriaEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-europe-server" />;
}
