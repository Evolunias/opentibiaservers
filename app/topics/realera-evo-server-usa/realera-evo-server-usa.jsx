import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-evo-server-usa');
}

export default function RealeraEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="realera-evo-server-usa" />;
}
