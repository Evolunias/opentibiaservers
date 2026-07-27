import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-11-evo-servers');
}

export default function Classicus11EvoServersKeywordPage() {
  return <StaticKeywordPage slug="classicus-11-evo-servers" />;
}
