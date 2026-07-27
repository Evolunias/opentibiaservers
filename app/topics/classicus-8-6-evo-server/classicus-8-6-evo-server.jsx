import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-8-6-evo-server');
}

export default function Classicus86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-8-6-evo-server" />;
}
