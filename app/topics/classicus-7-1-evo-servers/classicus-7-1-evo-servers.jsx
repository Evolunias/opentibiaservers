import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-7-1-evo-servers');
}

export default function Classicus71EvoServersKeywordPage() {
  return <StaticKeywordPage slug="classicus-7-1-evo-servers" />;
}
