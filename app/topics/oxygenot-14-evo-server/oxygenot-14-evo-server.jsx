import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-14-evo-server');
}

export default function Oxygenot14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-14-evo-server" />;
}
