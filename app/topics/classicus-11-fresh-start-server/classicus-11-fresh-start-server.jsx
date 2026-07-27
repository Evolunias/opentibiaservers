import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-11-fresh-start-server');
}

export default function Classicus11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-11-fresh-start-server" />;
}
