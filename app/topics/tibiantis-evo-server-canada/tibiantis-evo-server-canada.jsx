import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-evo-server-canada');
}

export default function TibiantisEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-evo-server-canada" />;
}
