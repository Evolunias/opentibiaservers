import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-54-evo-servers');
}

export default function Classicus854EvoServersKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-54-evo-servers" />;
}
