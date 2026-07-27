import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-10-0-evo-servers');
}

export default function Evolera100EvoServersKeywordPage() {
  return <StaticKeywordPage slug="evolera-10-0-evo-servers" />;
}
