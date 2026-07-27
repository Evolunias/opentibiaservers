import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-1-evo-servers');
}

export default function Oxygenot81EvoServersKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-1-evo-servers" />;
}
