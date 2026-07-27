import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-15-evo-server');
}

export default function Oxygenot15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-15-evo-server" />;
}
