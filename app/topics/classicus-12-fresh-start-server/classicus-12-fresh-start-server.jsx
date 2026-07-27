import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-12-fresh-start-server');
}

export default function Classicus12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-12-fresh-start-server" />;
}
