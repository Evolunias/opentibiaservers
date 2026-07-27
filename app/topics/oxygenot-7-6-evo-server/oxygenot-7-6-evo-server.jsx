import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-6-evo-server');
}

export default function Oxygenot76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-6-evo-server" />;
}
