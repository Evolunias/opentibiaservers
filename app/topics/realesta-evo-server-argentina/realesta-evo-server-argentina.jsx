import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-evo-server-argentina');
}

export default function RealestaEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="realesta-evo-server-argentina" />;
}
