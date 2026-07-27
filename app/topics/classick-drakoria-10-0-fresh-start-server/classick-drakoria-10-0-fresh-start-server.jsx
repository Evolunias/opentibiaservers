import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-10-0-fresh-start-server');
}

export default function ClassickDrakoria100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-10-0-fresh-start-server" />;
}
