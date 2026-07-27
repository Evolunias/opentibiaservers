import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-evo-server-brazil');
}

export default function TibiantisEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-evo-server-brazil" />;
}
