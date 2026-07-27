import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-9-6-evo-server');
}

export default function Classicus96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-9-6-evo-server" />;
}
