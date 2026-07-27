import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-4-fresh-start-server');
}

export default function Classicus84FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-4-fresh-start-server" />;
}
