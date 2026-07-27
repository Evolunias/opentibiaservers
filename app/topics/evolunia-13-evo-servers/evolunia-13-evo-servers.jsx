import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-13-evo-servers');
}

export default function Evolunia13EvoServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-13-evo-servers" />;
}
