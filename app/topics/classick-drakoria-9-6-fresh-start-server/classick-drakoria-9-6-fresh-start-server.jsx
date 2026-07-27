import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-9-6-fresh-start-server');
}

export default function ClassickDrakoria96FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-9-6-fresh-start-server" />;
}
