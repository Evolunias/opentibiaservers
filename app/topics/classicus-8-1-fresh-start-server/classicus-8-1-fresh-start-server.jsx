import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-1-fresh-start-server');
}

export default function Classicus81FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-1-fresh-start-server" />;
}
