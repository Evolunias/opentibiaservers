import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-7-4-fresh-start-server');
}

export default function ClassickDrakoria74FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-7-4-fresh-start-server" />;
}
