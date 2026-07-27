import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-canada-server');
}

export default function ClassickDrakoriaCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-canada-server" />;
}
