import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-evo-server-germany');
}

export default function RealeraEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="realera-evo-server-germany" />;
}
