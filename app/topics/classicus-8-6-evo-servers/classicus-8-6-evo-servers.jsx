import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-6-evo-servers');
}

export default function Classicus86EvoServersKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-6-evo-servers" />;
}
