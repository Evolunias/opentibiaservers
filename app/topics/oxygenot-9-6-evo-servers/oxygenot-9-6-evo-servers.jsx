import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-9-6-evo-servers');
}

export default function Oxygenot96EvoServersKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-9-6-evo-servers" />;
}
