import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-10-0-evo-server');
}

export default function Classicus100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-10-0-evo-server" />;
}
