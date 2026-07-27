import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-13-evo-server');
}

export default function Classicus13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-13-evo-server" />;
}
