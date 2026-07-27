import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-germany-server');
}

export default function ClassickDrakoriaGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-germany-server" />;
}
