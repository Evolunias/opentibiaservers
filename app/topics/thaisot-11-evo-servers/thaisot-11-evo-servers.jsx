import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-11-evo-servers');
}

export default function Thaisot11EvoServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-11-evo-servers" />;
}
