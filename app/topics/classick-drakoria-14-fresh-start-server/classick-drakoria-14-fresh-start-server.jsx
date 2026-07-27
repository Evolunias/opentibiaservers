import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-14-fresh-start-server');
}

export default function ClassickDrakoria14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-14-fresh-start-server" />;
}
