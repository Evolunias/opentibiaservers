import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-15-fresh-start-server');
}

export default function Classicus15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-15-fresh-start-server" />;
}
