import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-thaisot-server');
}

export default function EvoThaisotServerKeywordPage() {
  return <StaticKeywordPage slug="evo-thaisot-server" />;
}
