import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-15-fresh-start-server');
}

export default function ClassickDrakoria15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-15-fresh-start-server" />;
}
