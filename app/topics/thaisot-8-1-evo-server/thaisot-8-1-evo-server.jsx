import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-8-1-evo-server');
}

export default function Thaisot81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-8-1-evo-server" />;
}
