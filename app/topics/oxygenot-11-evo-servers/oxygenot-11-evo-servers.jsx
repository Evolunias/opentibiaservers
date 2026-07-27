import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-11-evo-servers');
}

export default function Oxygenot11EvoServersKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-11-evo-servers" />;
}
