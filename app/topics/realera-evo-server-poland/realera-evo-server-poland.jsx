import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-evo-server-poland');
}

export default function RealeraEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="realera-evo-server-poland" />;
}
