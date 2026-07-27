import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-evo-server-argentina');
}

export default function OxygenotEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-evo-server-argentina" />;
}
