import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-evo-server-germany');
}

export default function KasteriaEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="kasteria-evo-server-germany" />;
}
