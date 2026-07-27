import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-server');
}

export default function ClassickDrakoriaServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-server" />;
}
