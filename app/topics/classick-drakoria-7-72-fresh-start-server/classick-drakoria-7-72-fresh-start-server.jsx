import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-7-72-fresh-start-server');
}

export default function ClassickDrakoria772FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-7-72-fresh-start-server" />;
}
