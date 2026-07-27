import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-1-evo-server');
}

export default function Oxygenot71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-1-evo-server" />;
}
