import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-11-evo-server');
}

export default function Classicus11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-11-evo-server" />;
}
