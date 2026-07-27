import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-11-fresh-start-server');
}

export default function ClassickDrakoria11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-11-fresh-start-server" />;
}
