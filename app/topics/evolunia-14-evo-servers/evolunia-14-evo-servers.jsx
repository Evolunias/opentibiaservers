import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-14-evo-servers');
}

export default function Evolunia14EvoServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-14-evo-servers" />;
}
