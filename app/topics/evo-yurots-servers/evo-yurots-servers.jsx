import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-yurots-servers');
}

export default function EvoYurotsServersKeywordPage() {
  return <StaticKeywordPage slug="evo-yurots-servers" />;
}
