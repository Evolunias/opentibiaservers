import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-thornia-servers');
}

export default function EvoThorniaServersKeywordPage() {
  return <StaticKeywordPage slug="evo-thornia-servers" />;
}
