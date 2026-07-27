import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-argentina');
}

export default function EvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evo-server-argentina" />;
}
