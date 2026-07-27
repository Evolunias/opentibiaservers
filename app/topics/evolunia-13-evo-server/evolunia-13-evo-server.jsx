import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-13-evo-server');
}

export default function Evolunia13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-13-evo-server" />;
}
