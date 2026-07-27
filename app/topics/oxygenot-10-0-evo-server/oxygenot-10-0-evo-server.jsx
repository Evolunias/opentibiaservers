import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-10-0-evo-server');
}

export default function Oxygenot100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-10-0-evo-server" />;
}
