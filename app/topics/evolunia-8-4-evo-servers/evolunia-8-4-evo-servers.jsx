import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-4-evo-servers');
}

export default function Evolunia84EvoServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-4-evo-servers" />;
}
