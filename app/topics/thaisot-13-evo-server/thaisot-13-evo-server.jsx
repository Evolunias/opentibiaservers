import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-13-evo-server');
}

export default function Thaisot13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-13-evo-server" />;
}
