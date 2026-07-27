import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-6-evo-server');
}

export default function Thaisot76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-6-evo-server" />;
}
