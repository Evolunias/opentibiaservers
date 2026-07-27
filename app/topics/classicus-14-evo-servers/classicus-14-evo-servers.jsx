import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-14-evo-servers');
}

export default function Classicus14EvoServersKeywordPage() {
  return <StaticKeywordPage slug="classicus-14-evo-servers" />;
}
