import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-evo-server-argentina');
}

export default function TibiantisEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-evo-server-argentina" />;
}
