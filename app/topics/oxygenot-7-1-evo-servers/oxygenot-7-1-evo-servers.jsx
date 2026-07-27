import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-1-evo-servers');
}

export default function Oxygenot71EvoServersKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-1-evo-servers" />;
}
