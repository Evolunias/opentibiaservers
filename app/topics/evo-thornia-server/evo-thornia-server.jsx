import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-thornia-server');
}

export default function EvoThorniaServerKeywordPage() {
  return <StaticKeywordPage slug="evo-thornia-server" />;
}
