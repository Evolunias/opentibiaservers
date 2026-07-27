import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-8-4-evo-server');
}

export default function Thaisot84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-8-4-evo-server" />;
}
