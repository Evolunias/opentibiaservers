import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-7-72-evo-server');
}

export default function Classicus772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-7-72-evo-server" />;
}
