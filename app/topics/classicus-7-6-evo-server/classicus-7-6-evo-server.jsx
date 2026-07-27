import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-7-6-evo-server');
}

export default function Classicus76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-7-6-evo-server" />;
}
