import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-0-evo-servers');
}

export default function Oxygenot80EvoServersKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-0-evo-servers" />;
}
