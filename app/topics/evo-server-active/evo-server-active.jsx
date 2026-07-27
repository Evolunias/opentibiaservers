import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-active');
}

export default function EvoServerActiveKeywordPage() {
  return <StaticKeywordPage slug="evo-server-active" />;
}
