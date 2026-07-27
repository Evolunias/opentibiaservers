import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-14-fresh-start-server');
}

export default function Classicus14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-14-fresh-start-server" />;
}
