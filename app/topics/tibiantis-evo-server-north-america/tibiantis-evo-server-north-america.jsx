import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-evo-server-north-america');
}

export default function TibiantisEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-evo-server-north-america" />;
}
