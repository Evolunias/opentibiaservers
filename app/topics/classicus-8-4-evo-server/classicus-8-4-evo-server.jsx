import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-4-evo-server');
}

export default function Classicus84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-4-evo-server" />;
}
