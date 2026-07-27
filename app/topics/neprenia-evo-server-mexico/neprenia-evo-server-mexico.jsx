import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-evo-server-mexico');
}

export default function NepreniaEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="neprenia-evo-server-mexico" />;
}
