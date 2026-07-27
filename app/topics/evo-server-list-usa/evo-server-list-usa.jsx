import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-list-usa');
}

export default function EvoServerListUsaKeywordPage() {
  return <StaticKeywordPage slug="evo-server-list-usa" />;
}
