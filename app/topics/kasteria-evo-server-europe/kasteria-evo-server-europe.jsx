import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-evo-server-europe');
}

export default function KasteriaEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="kasteria-evo-server-europe" />;
}
