import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-evo-server-canada');
}

export default function RealeraEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="realera-evo-server-canada" />;
}
