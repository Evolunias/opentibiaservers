import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-4-evo-servers');
}

export default function Oxygenot74EvoServersKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-4-evo-servers" />;
}
