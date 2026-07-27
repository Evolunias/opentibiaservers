import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-10-0-evo-servers');
}

export default function Evolunia100EvoServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-10-0-evo-servers" />;
}
