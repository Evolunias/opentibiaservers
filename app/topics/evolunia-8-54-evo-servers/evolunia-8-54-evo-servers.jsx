import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-54-evo-servers');
}

export default function Evolunia854EvoServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-54-evo-servers" />;
}
