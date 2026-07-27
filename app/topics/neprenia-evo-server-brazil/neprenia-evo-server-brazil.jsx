import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-evo-server-brazil');
}

export default function NepreniaEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="neprenia-evo-server-brazil" />;
}
