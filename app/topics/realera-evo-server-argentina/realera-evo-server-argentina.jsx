import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-evo-server-argentina');
}

export default function RealeraEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="realera-evo-server-argentina" />;
}
