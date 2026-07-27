import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-15-evo-servers');
}

export default function Classicus15EvoServersKeywordPage() {
  return <StaticKeywordPage slug="classicus-15-evo-servers" />;
}
