import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-evo-server-south-america');
}

export default function NtoStarEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-evo-server-south-america" />;
}
