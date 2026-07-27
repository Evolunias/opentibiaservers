import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-7-72-fresh-start-server');
}

export default function Classicus772FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-7-72-fresh-start-server" />;
}
