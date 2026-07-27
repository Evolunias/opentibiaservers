import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-0-fresh-start-server');
}

export default function ClassickDrakoria80FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-0-fresh-start-server" />;
}
