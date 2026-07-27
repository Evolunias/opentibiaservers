import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-oxygenot-servers');
}

export default function EvoOxygenotServersKeywordPage() {
  return <StaticKeywordPage slug="evo-oxygenot-servers" />;
}
