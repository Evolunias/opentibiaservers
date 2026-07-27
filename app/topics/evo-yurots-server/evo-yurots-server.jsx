import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-yurots-server');
}

export default function EvoYurotsServerKeywordPage() {
  return <StaticKeywordPage slug="evo-yurots-server" />;
}
