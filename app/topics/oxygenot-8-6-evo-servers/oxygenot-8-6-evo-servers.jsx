import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-6-evo-servers');
}

export default function Oxygenot86EvoServersKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-6-evo-servers" />;
}
