import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-evo-servers-brazil');
}

export default function TibiantisEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-evo-servers-brazil" />;
}
