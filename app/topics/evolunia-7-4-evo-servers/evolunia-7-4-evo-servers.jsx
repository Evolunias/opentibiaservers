import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-4-evo-servers');
}

export default function Evolunia74EvoServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-4-evo-servers" />;
}
