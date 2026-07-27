import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-6-fresh-start-server');
}

export default function ClassickDrakoria86FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-6-fresh-start-server" />;
}
