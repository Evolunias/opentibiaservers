import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-evo-server-europe');
}

export default function RealeraEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="realera-evo-server-europe" />;
}
