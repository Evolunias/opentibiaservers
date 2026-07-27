import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-evo-server-uk');
}

export default function RealeraEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="realera-evo-server-uk" />;
}
