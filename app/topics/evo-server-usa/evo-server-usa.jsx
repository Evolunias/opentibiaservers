import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-usa');
}

export default function EvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="evo-server-usa" />;
}
