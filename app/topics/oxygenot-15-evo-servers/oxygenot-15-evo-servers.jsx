import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-15-evo-servers');
}

export default function Oxygenot15EvoServersKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-15-evo-servers" />;
}
