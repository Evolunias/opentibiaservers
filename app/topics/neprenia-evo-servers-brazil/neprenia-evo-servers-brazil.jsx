import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-evo-servers-brazil');
}

export default function NepreniaEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="neprenia-evo-servers-brazil" />;
}
