import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-6-evo-servers');
}

export default function Evolunia76EvoServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-6-evo-servers" />;
}
