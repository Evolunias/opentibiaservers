import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-9-6-evo-server');
}

export default function Thaisot96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-9-6-evo-server" />;
}
