import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-14-evo-server');
}

export default function Classicus14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-14-evo-server" />;
}
