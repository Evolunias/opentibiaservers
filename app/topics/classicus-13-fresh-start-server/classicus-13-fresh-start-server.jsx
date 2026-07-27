import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-13-fresh-start-server');
}

export default function Classicus13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-13-fresh-start-server" />;
}
