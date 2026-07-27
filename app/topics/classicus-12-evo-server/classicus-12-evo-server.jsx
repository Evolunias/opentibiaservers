import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-12-evo-server');
}

export default function Classicus12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-12-evo-server" />;
}
