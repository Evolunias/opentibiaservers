import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-rubinot-servers');
}

export default function EvoRubinotServersKeywordPage() {
  return <StaticKeywordPage slug="evo-rubinot-servers" />;
}
