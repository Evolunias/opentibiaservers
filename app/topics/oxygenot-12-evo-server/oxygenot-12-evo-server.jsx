import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-12-evo-server');
}

export default function Oxygenot12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-12-evo-server" />;
}
