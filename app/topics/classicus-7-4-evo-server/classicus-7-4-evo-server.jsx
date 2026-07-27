import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-7-4-evo-server');
}

export default function Classicus74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-7-4-evo-server" />;
}
