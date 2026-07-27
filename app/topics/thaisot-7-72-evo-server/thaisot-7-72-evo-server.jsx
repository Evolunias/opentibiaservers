import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-72-evo-server');
}

export default function Thaisot772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-72-evo-server" />;
}
