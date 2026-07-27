import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-10-98-evo-server');
}

export default function Oxygenot1098EvoServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-10-98-evo-server" />;
}
