import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-evo-server-argentina');
}

export default function UnlineEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="unline-evo-server-argentina" />;
}
