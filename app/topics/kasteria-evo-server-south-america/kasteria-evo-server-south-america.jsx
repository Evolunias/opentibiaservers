import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-evo-server-south-america');
}

export default function KasteriaEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-evo-server-south-america" />;
}
