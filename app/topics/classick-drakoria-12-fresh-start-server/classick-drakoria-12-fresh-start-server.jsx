import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-12-fresh-start-server');
}

export default function ClassickDrakoria12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-12-fresh-start-server" />;
}
