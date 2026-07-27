import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-72-evo-server');
}

export default function Oxygenot772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-72-evo-server" />;
}
