import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-evo-server-south-america');
}

export default function TibiantisEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-evo-server-south-america" />;
}
