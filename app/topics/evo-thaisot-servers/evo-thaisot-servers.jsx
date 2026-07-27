import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-thaisot-servers');
}

export default function EvoThaisotServersKeywordPage() {
  return <StaticKeywordPage slug="evo-thaisot-servers" />;
}
