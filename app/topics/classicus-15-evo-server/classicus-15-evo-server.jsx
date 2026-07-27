import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-15-evo-server');
}

export default function Classicus15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-15-evo-server" />;
}
