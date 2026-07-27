import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-4-evo-server');
}

export default function Thaisot74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-4-evo-server" />;
}
