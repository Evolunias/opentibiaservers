import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-evo-server-poland');
}

export default function KasteriaEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="kasteria-evo-server-poland" />;
}
