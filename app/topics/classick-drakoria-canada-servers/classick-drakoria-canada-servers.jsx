import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-canada-servers');
}

export default function ClassickDrakoriaCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-canada-servers" />;
}
