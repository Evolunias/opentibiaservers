import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-13-fresh-start-server');
}

export default function ClassickDrakoria13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-13-fresh-start-server" />;
}
