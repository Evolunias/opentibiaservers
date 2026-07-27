import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server');
}

export default function EvoServerKeywordPage() {
  return <StaticKeywordPage slug="evo-server" />;
}
