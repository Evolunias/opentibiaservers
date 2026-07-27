import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-10-98-evo-servers');
}

export default function Evolunia1098EvoServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-10-98-evo-servers" />;
}
