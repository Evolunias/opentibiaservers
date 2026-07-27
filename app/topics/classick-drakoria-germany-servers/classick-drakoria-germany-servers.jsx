import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-germany-servers');
}

export default function ClassickDrakoriaGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-germany-servers" />;
}
